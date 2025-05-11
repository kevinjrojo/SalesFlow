class InsufficientStockException(Exception):
    def __init__(self, message = "Insufficient Stock"):
        super().__init__(message)