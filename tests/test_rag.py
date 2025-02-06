def test_rag_accuracy():
    query = "What is Superteam Vietnam's focus?"
    result = handle_query(query)
    assert "web3" in result.lower() or "NO" in result
