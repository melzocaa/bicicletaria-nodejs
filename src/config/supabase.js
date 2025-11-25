require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Verifica se as variáveis existem
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("❌ Erro: Variáveis SUPABASE_URL e SUPABASE_KEY não estão definidas no .env");
  process.exit(1);
}

// Cria o cliente do Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Teste opcional de conexão (não trava a API)
async function testConnection() {
  try {
    const { count, error } = await supabase
      .from('products')
      .select('*', { count: "exact", head: true });

    if (error) throw error;
    console.log("✅ Supabase conectado (tabela products acessível).");
  } catch (err) {
    console.warn("⚠️ Aviso: Não foi possível conectar à tabela products:", err.message);
  }
}

// Executa sem quebrar o servidor
testConnection();

module.exports = supabase;
