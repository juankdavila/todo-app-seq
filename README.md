# 📝 Todo App con Winston + SEQ

Este proyecto usa `Winston` como logger estructurado y envía los logs a `Seq` para su análisis.

---

## 🚀 Correr SEQ con Docker

```bash
docker run --name seq -d --restart unless-stopped \
  -e ACCEPT_EULA=Y \
  -v seq-data:/data \
  -p 5341:5341 \
  -p 80:80 \
  datalust/seq


npm install winston winston-seq
