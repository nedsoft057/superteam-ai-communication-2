from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_member_search():
    response = client.get("/members?query=rust+developer")
    assert response.status_code == 200
    assert "Alice" in response.json()["results"]

def test_tweet_approval():
    response = client.post("/approve-tweet", json={"tweet_id": 1})
    assert response.status_code == 200
    assert response.json() == {"status": "Tweet approved"}
