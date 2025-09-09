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
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title><?= htmlspecialchars($post['titulo']) ?></title>
  <meta name="description" content="<?= htmlspecialchars($post['resumo'] ?? '') ?>" />
  <link rel="canonical" href="https://www.winove.com.br/blog/<?= urlencode($slug) ?>" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": <?= json_encode($post['titulo']) ?>,
    "image": <?= json_encode($post['imagem']) ?>,
    "author": {
      "@type": "Person",
      "name": <?= json_encode($post['autor']) ?>
    },
    "datePublished": <?= json_encode(date(DATE_ATOM, strtotime($post['criado_em']))) ?>,
    "dateModified": <?= json_encode(date(DATE_ATOM, strtotime($post['criado_em']))) ?>,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.winove.com.br/blog/<?= urlencode($slug) ?>"
    },
    "description": <?= json_encode($post['resumo'] ?? '') ?>
  }
  </script>
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
