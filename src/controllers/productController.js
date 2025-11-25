const supabase = require('../config/supabase');

// LISTAR TODOS
exports.listar = async (req, res) => {
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) return res.status(400).json(error);
    res.json(data);
};

// BUSCAR POR ID
exports.buscarPorId = async (req, res) => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', req.params.id)
        .single();

    if (error) return res.status(400).json(error);
    res.json(data);
};

// CRIAR
exports.criar = async (req, res) => {
    const { nome, preco, descricao, estoque } = req.body;

    const { data, error } = await supabase
        .from('products')
        .insert([{ nome, preco, descricao, estoque }])
        .select()
        .single();

    if (error) return res.status(400).json(error);
    res.status(201).json(data);
};

// ATUALIZAR
exports.atualizar = async (req, res) => {
    const { data, error } = await supabase
        .from('products')
        .update(req.body)
        .eq('id', req.params.id)
        .select()
        .single();

    if (error) return res.status(400).json(error);
    res.json(data);
};

// DELETAR
exports.deletar = async (req, res) => {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', req.params.id);

    if (error) return res.status(400).json(error);
    res.sendStatus(204);
};
