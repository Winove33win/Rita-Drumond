@echo off
Title Conectar ao banco Winove (Plesk)
echo.
echo Testando conexao com o servidor...
ping 150.230.81.36 -n 2 > nul

IF ERRORLEVEL 1 (
    echo Nao foi possivel alcancar o host 150.230.81.36.
    pause
    exit /b
)

echo Host acessivel. Iniciando MySQL...
echo ----------------------------------------
mysql -h 150.230.81.36 -P 3306 -u fernandowinove -p