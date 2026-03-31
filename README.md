# Diabetes Prediction from Health Data

A full-stack machine learning application that predicts the likelihood of diabetes based on key health indicators. This project showcases an end-to-end workflow, from data analysis and model training to API deployment and a web-based user interface.



---

## Features

-   **Exploratory Data Analysis (EDA):** In-depth analysis and visualization of the PIMA Indians Diabetes Database.
-   **Data Preprocessing:** Handled missing values (imputation) and standardized features for optimal model performance.
-   **Multi-Model Training:** Trained and evaluated several classification algorithms, including Logistic Regression, K-Nearest Neighbors, Random Forest, and XGBoost.
-   **Hyperparameter Tuning:** Utilized `GridSearchCV` to find the optimal parameters for the best-performing model (XGBoost).
-   **Reusable ML Pipeline:** Encapsulated the entire preprocessing and prediction workflow into a single, robust `scikit-learn` Pipeline.
-   **REST API:** Deployed the trained pipeline as a RESTful API using **Flask**, making the model accessible for predictions via web requests.
-   **Interactive Web Interface:** Built a user-friendly front-end with **HTML, CSS, and JavaScript** that allows users to input patient data and receive real-time predictions from the API.

---

## Technology Stack

-   **Backend:** Python, Flask
-   **Machine Learning:** Scikit-learn, Pandas, NumPy, XGBoost
-   **Data Visualization:** Matplotlib, Seaborn
-   **Frontend:** HTML, CSS, JavaScript (with Fetch API)
-   **Development Environment:** Jupyter Notebook, Git

---
