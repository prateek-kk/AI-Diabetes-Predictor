from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import os

app = Flask(__name__)

# Load model
model = joblib.load('diabetes_pipeline.joblib')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        features = np.array([[
            float(data.get('pregnancies', 0)),
            float(data.get('glucose', 0)),
            float(data.get('bloodpressure', 0)),
            float(data.get('skinthickness', 0)),
            float(data.get('insulin', 0)),
            float(data.get('bmi', 0)),
            float(data.get('dpf', 0)),
            float(data.get('age', 0))
        ]])

        prediction = model.predict(features)[0]

        if hasattr(model, "predict_proba"):
            probability = model.predict_proba(features)[0][1]
        else:
            probability = 0.5

        return jsonify({
            "result": "Diabetic" if prediction == 1 else "Not Diabetic",
            "probability": round(float(probability) * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


# 🔥 IMPORTANT FOR RENDER
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)