"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pizza, Ingredient, Recipe, Comment, Favorite
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
         return jsonify({"message": "El usuario no fue encontrado"}), 401

    data_response = {
        "email": email,
        "password":password
    }

    return jsonify(data_response), 200 
#PIZZA -------------------->
@api.route('/pizza', methods=['GET', 'POST'])
def get_post_pizza():
    if request.method == 'GET':
        pizza = Pizza.query.all()
        all_pizza = list(map(lambda pizza: pizza.serialize(), pizza))
        return jsonify(all_pizza), 201

    if request.method == 'POST':
        body = request.get_json()
        pizza = Pizza(id=body["id"], name=body["name"])
        db.session.add(pizza)
        db.session.commit()
        return jsonify(pizza.serialize()), 201

@api.route('/pizza/<int:pizza_id>', methods=['GET', 'PUT', 'DELETE'])
def single_pizza(pizza_id):
    if request.method == 'GET':
        pizza = Pizza.query.get(pizza_id)
        if pizza is None:
            raise APIException("No existe esta pizza", 404)
        
        return jsonify(pizza.serialize())

    if request.method == 'PUT':
        pizza = Pizza.query.get(pizza_id)
        if pizza is None:
            raise APIException("No existe esta pizza", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id de la pizza no encontrada", 404)

        pizza.id = body["id"]
        pizza.name = body["name"]
        db.session.commit()

        return jsonify(pizza.serialize())

    if request.method == 'DELETE':
        pizza = Pizza.query.get(pizza_id)
        if pizza is None:
            raise APIException("No existe la pizza que intentas eliminar", 404)
        db.session.delete(pizza)
        db.session.commit()

        return jsonify(pizza.serialize())


#USER -------------------->
@api.route('/user', methods=['GET', 'POST'])
def get_post_user():
    if request.method == 'GET':
        user = User.query.all()
        all_user = list(map(lambda user: user.serialize(), user))
        return jsonify(all_user), 201

    if request.method == 'POST':
        body = request.get_json()
        user = User(id=body["id"], name=body["name"])
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()), 201

@api.route('/user/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def single_user(user_id):
    if request.method == 'GET':
        user = User.query.get(user_id)
        if user is None:
            raise APIException("No existe este user", 404)
        
        return jsonify(user.serialize())

    if request.method == 'PUT':
        user = User.query.get(user_id)
        if user is None:
            raise APIException("No existe este user", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id del user no encontrada", 404)

        user.id = body["id"]
        user.name = body["name"]
        db.session.commit()

        return jsonify(user.serialize())

    if request.method == 'DELETE':
        user = User.query.get(user_id)
        if user is None:
            raise APIException("No existe el user que intentas eliminar", 404)
        db.session.delete(user)
        db.session.commit()

        return jsonify(user.serialize())

#INGREDIENT -------------------->
@api.route('/ingredient', methods=['GET', 'POST'])
def get_post_ingredient():
    if request.method == 'GET':
        ingredient = Ingredient.query.all()
        all_ingredient = list(map(lambda ingredient: ingredient.serialize(), ingredient))
        return jsonify(all_ingredient), 201

    if request.method == 'POST':
        body = request.get_json()
        ingredient = Ingredient(id=body["id"], name=body["name"])
        db.session.add(ingredient)
        db.session.commit()
        return jsonify(ingredient.serialize()), 201

@api.route('/ingredient/<int:ingredient_id>', methods=['GET', 'PUT', 'DELETE'])
def single_ingredient(ingredient_id):
    if request.method == 'GET':
        ingredient = Ingredient.query.get(ingredient_id)
        if ingredient is None:
            raise APIException("No existe este ingredient", 404)
        
        return jsonify(ingredient.serialize())

    if request.method == 'PUT':
        ingredient = Ingredient.query.get(ingredient_id)
        if ingredient is None:
            raise APIException("No existe este ingrediente", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id del ingrediente no encontrada", 404)

        ingredient.id = body["id"]
        ingredient.name = body["name"]
        db.session.commit()

        return jsonify(ingredient.serialize())

    if request.method == 'DELETE':
        ingredient = Ingredient.query.get(ingredient_id)
        if ingredient is None:
            raise APIException("No existe el ingrediente que intentas eliminar", 404)
        db.session.delete(ingredient)
        db.session.commit()

        return jsonify(ingredient.serialize())

#RECIPE -------------------->
@api.route('/recipe', methods=['GET', 'POST'])
def get_post_recipe():
    if request.method == 'GET':
        recipe = Recipe.query.all()
        all_recipe = list(map(lambda recipe: recipe.serialize(), recipe))
        return jsonify(all_recipe), 201

    if request.method == 'POST':
        body = request.get_json()
        recipe = Recipe(id=body["id"], name=body["name"])
        db.session.add(recipe)
        db.session.commit()
        return jsonify(recipe.serialize()), 201

@api.route('/recipe/<int:recipe_id>', methods=['GET', 'PUT', 'DELETE'])
def single_recipe(recipe_id):
    if request.method == 'GET':
        recipe = Recipe.query.get(recipe_id)
        if recipe is None:
            raise APIException("No existe esta recipe", 404)
        
        return jsonify(recipe.serialize())

    if request.method == 'PUT':
        recipe = Recipe.query.get(recipe_id)
        if recipe is None:
            raise APIException("No existe esta recipe", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id de la recipe no encontrada", 404)

        recipe.id = body["id"]
        db.session.commit()

        return jsonify(recipe.serialize())

    if request.method == 'DELETE':
        recipe = Recipe.query.get(recipe_id)
        if recipe is None:
            raise APIException("No existe la recipe que intentas eliminar", 404)
        db.session.delete(recipe)
        db.session.commit()

        return jsonify(recipe.serialize())

#comment -------------------->
@api.route('/comment', methods=['GET', 'POST'])
def get_post_comment():
    if request.method == 'GET':
        comment = Comment.query.all()
        all_comment = list(map(lambda comment: comment.serialize(), comment))
        return jsonify(all_comment), 201

    if request.method == 'POST':
        body = request.get_json()
        comment = Comment(id=body["id"], name=body["name"])
        db.session.add(comment)
        db.session.commit()
        return jsonify(comment.serialize()), 201

@api.route('/comment/<int:comment_id>', methods=['GET', 'PUT', 'DELETE'])
def single_comment(comment_id):
    if request.method == 'GET':
        comment = Comment.query.get(comment_id)
        if comment is None:
            raise APIException("No existe ese comentario", 404)
        
        return jsonify(comment.serialize())

    if request.method == 'PUT':
        comment = Comment.query.get(comment_id)
        if comment is None:
            raise APIException("No existe ese comentario", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id del comentario no encontrada", 404)

        comment.id = body["id"]
        db.session.commit()

        return jsonify(comment.serialize())

    if request.method == 'DELETE':
        comment = Comment.query.get(comment_id)
        if comment is None:
            raise APIException("No existe el comentario que intentas eliminar", 404)
        db.session.delete(comment)
        db.session.commit()

        return jsonify(comment.serialize())

#FAVORITE -------------------->
@api.route('/favorite', methods=['GET', 'POST'])
def get_post_favorite():
    if request.method == 'GET':
        favorite = Favorite.query.all()
        all_favorite = list(map(lambda favorite: favorite.serialize(), favorite))
        return jsonify(all_favorite), 201

    if request.method == 'POST':
        body = request.get_json()
        favorite = favorite(id=body["id"], name=body["name"])
        db.session.add(favorite)
        db.session.commit()
        return jsonify(favorite.serialize()), 201

@api.route('/favorite/<int:favorite_id>', methods=['GET', 'PUT', 'DELETE'])
def single_favorite(favorite_id):
    if request.method == 'GET':
        favorite = Favorite.query.get(favorite_id)
        if favorite is None:
            raise APIException("No existe esta favorite", 404)
        
        return jsonify(favorite.serialize())

    if request.method == 'PUT':
        favorite = Favorite.query.get(favorite_id)
        if favorite is None:
            raise APIException("No existe esta favorite", 404)
        body = request.get_json()

        if not("id" in body):
            raise APIException("id de la favorite no encontrada", 404)

        favorite.id = body["id"]
        favorite.name = body["name"]
        db.session.commit()

        return jsonify(favorite.serialize())

    if request.method == 'DELETE':
        favorite = Favorite.query.get(favorite_id)
        if favorite is None:
            raise APIException("No existe la favorite que intentas eliminar", 404)
        db.session.delete(favorite)
        db.session.commit()

        return jsonify(favorite.serialize())
