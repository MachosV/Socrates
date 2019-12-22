import pandas as pd
import json

def main():
    df = pd.read_csv("data.csv")
    cols = ["Brand","Model"]
    df = df[cols]
    brands_value_counts = df['Brand'].value_counts()
    models_value_counts = df['Model'].value_counts()
    brands_to_remove = brands_value_counts[brands_value_counts <= 9].index
    models_to_remove = models_value_counts[models_value_counts <= 9].index
    df = df[~df.Brand.isin(brands_to_remove)]
    df = df[~df.Model.isin(models_to_remove)]
    df = df.dropna(subset=['Model'])
    json_dict={}
    for index,row in df.iterrows():
        brand = row["Brand"]
        model = row["Model"]
        if brand not in json_dict:
            json_dict[brand] = []
        if model not in json_dict[brand]:
            json_dict[brand].append(model)
    brands = {}
    brands["Brands"]=json_dict.keys()
    f = open("brandandmodel.txt","w")
    f.write(json.dumps(json_dict,indent=4))
    f.close()
    f = open("brands.txt","w")
    f.write(json.dumps(brands,indent=4))
    f.close()

if __name__ == "__main__":
    main()