# Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recupera sua senha informarndo o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve resetar sua senha;

**Requisitos não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regra de Negócio**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# atualização do perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**Regra de Negócio**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não Funcionais**

- Os agedamentos do prestador no dia devem ser armazenadaos em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas me tempo-real utilizando Socket.io;

**Regra de Negócio**

- A notificação deve er um status de lida ou não-lida para o que o prestador possa controlar

# Agenda de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos com horário disponível;
- O usuário deve poder listar horários disponíveis em um específico de um prestador;
  -O usuário deve poder realizar um novo agendamento com o prestador selecionado.

**Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regra de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
