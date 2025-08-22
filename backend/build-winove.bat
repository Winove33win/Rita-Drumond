@echo off
echo === GERANDO BUILD DO SITE WINOVE ===

REM Acessar a pasta do projeto
cd winove

REM Rodar o comando de build (cria a pasta dist/)
call npm run build

echo.
echo ✅ Build concluído. A pasta 'dist' foi criada dentro da pasta winove.
pause
