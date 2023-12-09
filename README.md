# titanic
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
titanic=pd.read_csv('train.csv')
titanic.shape
titanic.head()
titanic.info()
port=pd.get_dummies(titanic.Embarked,prefix='Embarked')
port.head()
titanic = titanic.join(port)
titanic.drop(['Embarked'],axis = 1,inplace = True)
titanic.head()
titanic.Sex=titanic.Sex.map({'male':0,'female':1})
y = titanic.Survived.copy()
X = titanic.drop(['Survived'], axis = 1)
X.drop(['Cabin','Ticket','Name','PassengerId'], axis = 1, inplace = True)
X.info()
X.isnull().values.any()
X[pd.isnull(X).any(axis = 1)]
X.Age.fillna(X.Age.mean(), inplace = True)
X.isnull().values.any()
from sklearn.model_selection import train_test_split
X_train,X_valid,y_train,y_valid = train_test_split(X,y, test_size = 0.2, random_state = 7)
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(X_train,y_train)
model.score(X_train,y_train)
model.score(X_valid,y_valid)
titanic['Survived'].value_counts()
titanic['Sex'].value_counts()
titanic['Pclass'].value_counts()
