#coding: utf-8
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from xgboost import XGBRegressor
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import LabelEncoder
from joblib import dump,load

def main():
    file_name = "testfile.csv"
    csv_data = pd.read_csv(file_name)
    csv_data = csv_data.dropna(subset=['Model'])
    #s = (X_train.dtypes == 'object')
    s = (csv_data.dtypes == 'object')
    object_cols = list(s[s].index)
    dump(object_cols,"object_cols.cols")
    encoders = []
    label_encoder = LabelEncoder()
    for col in object_cols:
        label_encoder = LabelEncoder()
        label_encoder.fit(csv_data[col])
        encoders.append(label_encoder)
    
    index = 0
    for col in object_cols:
        label_encoder = encoders[index]
        csv_data[col] = label_encoder.transform(csv_data[col])
        index += 1
    
    dump(encoders,"encoders.encoder")
    print csv_data.head(10)
    brands_value_counts = csv_data['Brand'].value_counts()
    models_value_counts = csv_data['Model'].value_counts()
    csv_data = csv_data[csv_data.Mileage > 1000]
    csv_data = csv_data[csv_data.Price > 900]
    brands_to_remove = brands_value_counts[brands_value_counts <= 9].index
    models_to_remove = models_value_counts[models_value_counts <= 9].index
    csv_data = csv_data[~csv_data.Brand.isin(brands_to_remove)]
    csv_data = csv_data[~csv_data.Model.isin(models_to_remove)]
    features=['Brand','Model','Year','Transmission','Fuel','Mileage','Horsepower','Displacement','Damage']#,'Location']
    X = csv_data[features]
    y = csv_data.Price
    X_train, X_test, y_train, y_test=train_test_split(X,y,test_size=0.2, random_state=65256)
    X_unseen = pd.read_csv("unseen.csv")
    index = 0
    for col in object_cols:
        label_encoder = encoders[index]
        X_unseen[col] = label_encoder.transform(X_unseen[col])
        index += 1
    model = XGBRegressor(n_estimators=1000)
    model.fit(X_train, y_train, 
             early_stopping_rounds=10, 
             eval_set=[(X_test, y_test)],
             verbose=True)
    preds_val = model.predict(X_test)
    mae = mean_absolute_error(y_test, preds_val)
    score = model.score(X_test,y_test)
    score = float("{0:.2f}".format(score * 100))
    print score 
    print mae
    print "Predicted",model.predict(X_unseen)
    filename="prod_model"+str(int(round(score)))+".ml_model"
    dump(model,filename)

if __name__ == "__main__":
    main()