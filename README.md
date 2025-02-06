AI Communication Suite for Superteam Vietnam
🚀 Automate Telegram/Twitter workflows with local AI while keeping data private.
🤝 20% of bounty proceeds will be donated to Infant Jesus Orphanage Home
15 Etoi Street, off Goldie St upon winning.

Features
✅ Telegram Knowledge Bot

Answer community questions using RAG (Retrieval-Augmented Generation).

Trained on Superteam’s documents. Says “NO” when unsure.

✅ Superteam Member Finder

Semantic search to match members with project needs (e.g., “Find a Rust dev”).

✅ Twitter Assistant

Generate, edit, and publish tweets with AI suggestions.

✅ Admin Dashboard

Role-based access control (Admins, Moderators, Viewers).

✅ 100% Local LLMs

No cloud APIs. Runs LLaMA 2/Falcon models on your hardware.

Tech Stack
AI: LLaMA 2, LangChain, Sentence-Transformers

Backend: FastAPI, PostgreSQL, Redis

Frontend: React, Tailwind CSS

Deployment: Docker, ONNX Runtime

Getting Started
1. Prerequisites
Hardware: x86 server with 16GB RAM + NVIDIA GPU (optional).

Software: Docker, Python 3.10+.

2. Clone the Repository
bash
git clone https://github.com/[your-username]/superteam-ai-communication
cd superteam-ai-communication
3. Download LLM Model
Download the quantized LLaMA 2 model:

bash
wget https://huggingface.co/TheBloke/Llama-2-7B-GGUF/resolve/main/llama-2-7b.Q4_K_M.gguf -P models/
4. Set Up Environment Variables
Copy the example .env file and update it with your credentials:

bash
cp .env.example .env
# Edit .env with your actual tokens
5. Run the System
Start all services with Docker Compose:

bash
docker-compose up --build
System Architecture
System Architecture

Key Files
File	Purpose
backend/main.py	FastAPI server with RBAC
backend/telegram_bot.py	Telegram RAG bot
backend/member_search.py	Semantic member search
frontend/src/App.jsx	Admin dashboard UI
docker-compose.yml	One-click deployment
Testing
1. Unit Tests
Run backend tests:

bash
docker-compose exec backend pytest
2. Load Testing
Simulate 1,200 concurrent users with Locust:

bash
locust -f locustfile.py
For Judges
Test credentials: admin@test.com / superteam123


Full documentation: https://docs.google.com/document/d/1a8KTT_gLhbgTxWIipSd4QAK0hmFcdwuCUyQei2N2xuw/edit?usp=drivesdk

Social Commitment
20% of Bounty Donation: Transparent transfer to Infant Jesus Orphanage Home
15 Etoi Street, off Goldie St within 7 days of winning.

Proof: Public blockchain transaction ID + video of donation handover.

License
MIT License - Free for non-commercial use.
Contact: favourndukwu2@gmail.com
