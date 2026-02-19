from flask import Flask
from flask_cors import CORS
from controllers.table_controller import table_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(table_bp)

if __name__ == "__main__":
    app.run(debug=True)