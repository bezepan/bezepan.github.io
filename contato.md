---
layout: page
permalink: /contato/
---
<div class="main">
     <div class="container">
<section class="hgroup">
               <h1>Contato</h1>
               <h2>Entre em contato conosco...</h2>

               <ul class="breadcrumb pull-right">
                    <li><a href="/{{ site.baseurl }}">Home</a> </li>
                    <li class="active">Contato</li>
               </ul>
          </section>
<section>
               <div class="row">
                    <div class="office_address col-sm-4 col-md-4">
                         <div class="team_member">
                         	<img src="/assets/images/benzepan_logo.png" width="130" height="90" alt="logo">
                              <address>
                              <strong></strong><br>
                              Rua João Lopes de Lima, n° 12<br>
                              São Paulo, Sp<br>
                              <abbr title="Phone">Telefone:</abbr> (11) 2018-0195
                              </address>
                              <address>
                              <abbr title="Phone">Email:</abbr> <a href="mailto:dasivafnn@hotmail.com">dasivafnn@hotmail.com</a>
                              </address>
                         </div>
                    </div>
                    <div class="contact_form col-sm-8 col-md-8">


                         <form name="contact_form" id="contact_form" method="post">
                              <div class="row">
                                   <div class="col-sm-6 col-md-6">
                                        <label>Nome</label>
                                        <input name="name" id="name" class="form-control" type="text" value="" placeholder="Digite seu nome" required>
                                   </div>
                                   <div class="col-sm-6 col-md-6">
                                        <label>E-mail</label>
                                        <input type="email" name="email" id="email" class="form-control" type="text" value=""  placeholder="Digite seu email" required>
                                   </div>
                              </div>
                              <div class="row">
                                   <div class="col-sm-12 col-md-12">
                                        <label>Assunto</label>
                                        <input name="subject" id="subject" class="form-control" type="text" placeholder="Digite um assunto" required>
                                   </div>
                              </div>
                              <div class="row">
                                   <div class="col-sm-12 col-md-12">
                                        <label>Messagem</label>
                                        <textarea name="message" id="message" rows="8" class="form-control" placeholder="Digite uma menssagem" required></textarea>
                                   </div>

                                   <div class="col-sm-12 col-md-12"><br/>
                                        
                                        <div id="alert" class="alert" role="alert"></div>

                                   <input id="btn-enviar" class="btn btn-primary" type="submit" name="btn-enviar"></button> <span id="notice" class="alert alert-warning alert-dismissable hidden" style="margin-left:20px;"></span> </div>
                              </div>
                              
                                  

                         </form>
                    </div>
               </div>
          </section>
    