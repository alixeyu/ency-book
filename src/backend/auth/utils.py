import hashlib

def hash_password(password: str) -> str:
    hasher = hashlib.sha512(password.encode())
    return hasher.hexdigest()
