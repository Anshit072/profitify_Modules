from repositories.table_repository import TableRepository

class TableService:

    @staticmethod
    def fetch_tables():
        return TableRepository.get_all_tables()

    @staticmethod
    def fetch_table_data(table_name):
        return TableRepository.get_table_data(table_name)