from flask import Blueprint, jsonify
from services.table_service import TableService

table_bp = Blueprint("table", __name__)

@table_bp.route("/tables")
def get_tables():
    data = TableService.fetch_tables()
    return jsonify(data)

@table_bp.route("/table/<table_name>")
def get_table(table_name):
    data = TableService.fetch_table_data(table_name)
    return jsonify(data)