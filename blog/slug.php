<?php
// slug.php
$slug = $_GET['slug'] ?? null;

if (!$slug) {
  http_response_code(400);
  echo "Slug inválido.";
  exit;
}

$conn = new mysqli("localhost", "winove", "9*19avmU0", "fernando_winove_com_br_");
if ($conn->connect_error) {
  die("Erro de conexão com o banco de dados.");
}

$stmt = $conn->prepare("SELECT * FROM blog_posts WHERE slug = ?");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

$post = $result->fetch_assoc();

if (!$post) {
  echo "<h1>Post não encontrado</h1>";
  exit;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title><?= htmlspecialchars($post['titulo']) ?></title>
  <style>
    body { font-family: Arial; max-width: 800px; margin: auto; padding: 20px; }
    img { max-width: 100%; margin-bottom: 20px; }
    h1 { color: #333; }
    .meta { font-size: 0.9em; color: #777; margin-bottom: 30px; }
  </style>
</head>
<body>

  <h1><?= htmlspecialchars($post['titulo']) ?></h1>
  <div class="meta">Publicado em <?= date("d/m/Y", strtotime($post['criado_em'])) ?> por <?= htmlspecialchars($post['autor']) ?></div>

  <img src="<?= htmlspecialchars($post['imagem']) ?>" alt="Imagem destacada" />

  <div>
    <?= $post['conteudo'] ?>
  </div>

</body>
</html>
