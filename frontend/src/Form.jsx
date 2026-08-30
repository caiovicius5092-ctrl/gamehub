import { useState } from "react";
import "./Form.css";
import BorderGlow from "./components/BorderGlow";

function Form() {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha email e senha.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      console.log("Login realizado com sucesso:", data);
      alert("Login realizado com sucesso!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Preencha nome, email e senha.");
      return;
    }

    if (password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao criar conta");
      }

      alert("Conta criada com sucesso!");
      setMode("login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <BorderGlow
        className="login-card"
        glowColor="180 90% 65%"
        backgroundColor="rgba(9, 16, 28, 0.78)"
        borderRadius={24}
        glowRadius={28}
        glowIntensity={1.1}
        coneSpread={32}
        animated
        colors={["#00f5d4", "#7c3aed", "#38bdf8", "#ff4ecd"]}
        fillOpacity={0.32}
      >
        <div className="mode-toggle" aria-label="Trocar modo de autenticação">
          <button
            type="button"
            className={mode === "login" ? "toggle active" : "toggle"}
            onClick={() => {
              setError("");
              setMode("login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === "register" ? "toggle active" : "toggle"}
            onClick={() => {
              setError("");
              setMode("register");
            }}
          >
            Registrar
          </button>
        </div>

        <div className="brand">
          <img src="/icon.jpeg" alt="GameHub" className="logo-login" />
          <h1>GameHub</h1>
        </div>

        <p className="subtitle">
          {mode === "login" ? "Entre na sua conta" : "Crie sua conta"}
        </p>

        <div className="form-shell">
          {mode === "login" ? (
            <form className="login-form" onSubmit={handleLogin}>
              <label className="field">
                <span className="span-form">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="seu@email.com"
                />
              </label>

              <label className="field">
                <span className="span-form">Senha</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </label>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleRegister}>
              <label className="field">
                <span className="span-form">Nome</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Seu nome"
                />
              </label>

              <label className="field">
                <span className="span-form">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="seu@email.com"
                />
              </label>

              <label className="field">
                <span className="span-form">Senha</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Mínimo 6 caracteres"
                />
              </label>

              {error && <p className="error-message">{error}</p>}

              <button type="submit" disabled={loading}>
                {loading ? "Criando..." : "Criar conta"}
              </button>
            </form>
          )}
        </div>
      </BorderGlow>
    </main>
  );
}

export default Form;
