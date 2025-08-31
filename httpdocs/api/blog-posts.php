<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "winove", "9*19avmU0", "fernando_winove_com_br_");

if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "Erro de conexão com o banco"]);
  exit;
}


$result = $conn->query("SELECT id, titulo, slug, resumo, conteudo, imagem AS imagem_destacada, criado_em AS data_publicacao, autor, categoria FROM blog_posts ORDER BY criado_em DESC");


$posts = [];
while ($row = $result->fetch_assoc()) {
  $posts[] = $row;
}

echo json_encode($posts);
$conn->close();
?>
