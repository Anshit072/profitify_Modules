from fastapi import APIRouter
from services.table_service import TableService

router = APIRouter()

@router.get("/tables")
def get_tables():
    return TableService.fetch_tables()

@router.get("/table/{table_name}")
def get_table(table_name: str):
    return TableService.fetch_table_data(table_name)