from mlapi import mlapi
import pandas as pd
from joblib import load
import json
from flask import request

model = load("prod_model86.ml_model")
encoders = load("encoders.encoder")
object_cols = load("object_cols.cols")

@mlapi.route("/api/carPriceEstimate",methods=["POST"])
def carPriceEstimate():
    data_dict = json.loads(request.data)
    to_estimate = []
    temp = []
    temp.append(data_dict["Brand"])
    temp.append(data_dict["Model"])
    temp.append(data_dict["Year"])
    temp.append(data_dict["Transmission"])
    temp.append(data_dict["Fuel"])
    temp.append(data_dict["Mileage"])
    temp.append(data_dict["Horsepower"])
    temp.append(data_dict["Displacement"])
    temp.append(data_dict["Damage"])
    to_estimate.append(temp)
    X_unseen = pd.DataFrame(data=to_estimate,columns=['Brand','Model','Year','Transmission',"Fuel",'Mileage','Horsepower','Displacement','Damage'])
    index = 0
    for col in object_cols:
        encoder = encoders[index]
        X_unseen[col] = encoder.transform(X_unseen[col])
        index += 1
    data = {}
    data["estimation"] = str(model.predict(X_unseen)[0])
    return json.dumps(data,indent=4)