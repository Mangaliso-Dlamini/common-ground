import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Dense
from tensorflow.keras.utils import to_categorical

# Load the dataset
df = pd.read_csv('stats150.csv')

# Function to split training focus
def split_training_focus(row):
    words = [word.strip() for word in row.split(',')]
    return pd.Series([words[0], words[1]])

# Applying the function to the DataFrame
df[['T1 Focus', 'T2 Focus']] = df['Recommended Training Focus'].apply(split_training_focus)

# Drop the original 'Recommended Training Focus' column
df = df.drop(columns=['Recommended Training Focus'])

# Encode categorical variables
label_encoder_position = LabelEncoder()
df['Position'] = label_encoder_position.fit_transform(df['Position'])

label_encoder_t1 = LabelEncoder()
df['T1 Focus'] = label_encoder_t1.fit_transform(df['T1 Focus'])

label_encoder_t2 = LabelEncoder()
df['T2 Focus'] = label_encoder_t2.fit_transform(df['T2 Focus'])

# Dropping non-numeric and target columns
X = df.drop(columns=['Player ID', 'Name', 'T1 Focus', 'T2 Focus'])
y_t1 = to_categorical(df['T1 Focus'])
y_t2 = to_categorical(df['T2 Focus'])

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Split the data into training and test sets
X_train, X_test, y_t1_train, y_t1_test, y_t2_train, y_t2_test = train_test_split(X_scaled, y_t1, y_t2, test_size=0.2, random_state=42)

# Build the neural network model
input_layer = Input(shape=(X_train.shape[1],))

# Shared hidden layers
hidden_layer1 = Dense(64, activation='relu')(input_layer)
hidden_layer2 = Dense(32, activation='relu')(hidden_layer1)

# Output layers for T1 Focus and T2 Focus
t1_output = Dense(y_t1.shape[1], activation='softmax', name='t1_output')(hidden_layer2)
t2_output = Dense(y_t2.shape[1], activation='softmax', name='t2_output')(hidden_layer2)

# Create the model
model = Model(inputs=input_layer, outputs=[t1_output, t2_output])

# Compile the model
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
history = model.fit(X_train, [y_t1_train, y_t2_train], epochs=50, batch_size=32, validation_data=(X_test, [y_t1_test, y_t2_test]))

# Evaluate the model
evaluation = model.evaluate(X_test, [y_t1_test, y_t2_test])

# Output evaluation results
print(f"Overall Loss: {evaluation[0]}")
print(f"T1 Focus - Loss: {evaluation[1]}, Accuracy: {evaluation[3]}")
print(f"T2 Focus - Loss: {evaluation[2]}, Accuracy: {evaluation[4]}")

# Example new player data for prediction
new_player_df = [[19, 0, 20, 5, 1, 40, 600, 220, 100, 2, 8, 12]]

# Encode and scale the new player data
new_player_scaled = scaler.transform(new_player_df)

# Predict using the trained model
new_prediction = model.predict(new_player_scaled)
t1_focus_pred = label_encoder_t1.inverse_transform(np.argmax(new_prediction[0], axis=1))
t2_focus_pred = label_encoder_t2.inverse_transform(np.argmax(new_prediction[1], axis=1))

print("Predicted T1 Focus:", t1_focus_pred[0])
print("Predicted T2 Focus:", t2_focus_pred[0])


model.save('my_model.h5')

import json

#Save label encoders as JSON
with open('label_encoder_t1.json', 'w') as f:
    json.dump(label_encoder_t1.classes_.tolist(), f)

with open('label_encoder_t2.json', 'w') as f:
    json.dump(label_encoder_t2.classes_.tolist(), f)