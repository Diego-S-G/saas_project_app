# Project Management App
<br/>

Este é um dos projetos que fiz acompanhando o [curso do Mashrur Hossain na Udemy](https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course), na minha trilha de aprendizado de Ruby e Rails.
<br/>

O Project Management App é uma aplicação onde os usuários podem criar e gerenciar seus projetos de acordo com seu plano, adicionando artefatos e usuários a eles. Ele usa Milia para multi-tenancy, então cada projeto pertence à uma organização.
<br/>

Este projeto foi feito usando Ruby 2.5.8 e Rails 5.2.1 **(favor ler Problemas Conhecidos)**.
<br/>

## Funcionamento:
[saas-project-app.webm](https://github.com/user-attachments/assets/06dc92dc-d07d-49a8-9af9-d92e605e1e1d)


<br/>
<br/>

## Problemas Conhecidos: 
Esse projeto foi feito quando estava no início do aprendizado de Ruby, então ao criar o projeto sem perceber o criei usando ruby 3.3.5 e versões mais recentes do node/npm(não sei se isso afetou em si), então o projeto veio sem alguns arquivos que tive que colocar na mão(boot.rb e database.yml por exemplo) e talvez algumas funcionalidades comprometidas(nesse projeto nada interferiu como em outros mas é algo que vale apontar);
<br/>

Além disso, no curso foi usado Stripe para pagamentos e S3 Bucket da AWS, porém no meu projeto eles não estão presentes. No caso do Stripe, não consegui colocá-lo pois as vídeo-aulas ensinam a configurar usando versões antigas não mais funcionais, o que comprometeria meu progresso, por isso Stripe não foi utilizado.
