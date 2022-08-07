from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(300), unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    user_name = db.Column(db.String(80), unique=True, nullable=False)
    perfil_image = db.Column(db.String(250), unique=False, nullable=True)


    def __repr__(self):
        return '<User %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "user_name": self.user_name,
            "perfil_image": self.perfil_image,
        }


class Pizza(db.Model):
    __tablename__ = 'pizza'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    name = db.Column(db.String(80), unique=False, nullable=False)
    recipe = db.Column(db.String(), unique=False, nullable=False)
    pizza_image = db.Column(db.String(), unique=False, nullable=False)

    user_relationship = db.relationship('User')
    


    def __repr__(self):
        return '<Pizza %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "pizza_image": self.pizza_image,
            "user_name": self.user_relationship.user_name,
            "user_id": self.user_id,
            "recipe": self.recipe,
        }


class Ingredient(db.Model):
    __tablename__ = 'ingredient'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.String(), unique=False, nullable=False)
    ingredient_image = db.Column(db.String(), unique=False, nullable=True)


    def __repr__(self):
        return '<Ingredient %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name" : self.name,
            "description" : self.description,
        }


class Recipe(db.Model):
    __tablename__ = 'recipe'
    id = db.Column(db.Integer, primary_key=True)
    pizza_id = db.Column(db.Integer, db.ForeignKey('pizza.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))

    pizza_relationship = db.relationship('Pizza')
    ingredient_relationship = db.relationship('Ingredient')

    def __repr__(self):
        return '<Recipe %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "pizza_id" : self.pizza_id,
            "ingredient_id" : self.ingredient_id,
            "pizza_name": self.pizza_relationship.pizza_name,
            "ingredient_name": self.ingredient_relationship.name,
        }


class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    id_user_comment = db.Column(db.Integer, db.ForeignKey('user.id') )
    id_pizza = db.Column(db.Integer, db.ForeignKey('pizza.id') )
    rate = db.Column(db.Integer, unique=False, nullable=False)
    comment = db.Column(db.String(), unique=False, nullable=False)
    date = db.Column(db.String(), unique=False, nullable=False)

    user_relationship = db.relationship('User')
    pizza_relationship = db.relationship('Pizza')

    def __repr__(self):
        return '<Comment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "rate" : self.rate,
            "comment" : self.comment,
            "date": self.date
        }


class Favorite(db.Model):
    __tablename__ = 'favorite'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_pizza = db.Column(db.Integer, db.ForeignKey('pizza.id'))

    pizza_relationship = db.relationship('Pizza')
    user_relationship = db.relationship('User')

    def __repr__(self):
        return '<Fav %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "id_pizza": self.id_pizza,
        }