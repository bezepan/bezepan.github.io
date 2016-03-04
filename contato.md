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
                              Cosultar endereço<br>
                              São Paulo, SP<br>
                              <abbr title="Phone">Telefone:</abbr> (11) 1111-1111
                              </address>
                              <address>
                              <abbr title="Phone">Email:</abbr> <a href="mailto:#">email@email.com</a>
                              </address>
                         </div>
                    </div>
                    <div class="contact_form col-sm-8 col-md-8">

                      <div id="alert" class="alert alert-danger" role="alert"></div>

                         <form name="contact_form" id="contact_form" method="post">
                              <div class="row">
                                   <div class="col-sm-6 col-md-6">
                                        <label>Nome</label>
                                        <input name="name" id="name" class="form-control" type="text" value="">
                                   </div>
                                   <div class="col-sm-6 col-md-6">
                                        <label>E-mail</label>
                                        <input name="email" id="email" class="form-control" type="text" value="">
                                   </div>
                              </div>
                              <div class="row">
                                   <div class="col-sm-12 col-md-12">
                                        <label>Assunto</label>
                                        <input name="subject" id="subject" class="form-control" type="text">
                                   </div>
                              </div>
                              <div class="row">
                                   <div class="col-sm-12 col-md-12">
                                        <label>Messagem</label>
                                        <textarea name="message" id="message" rows="8" class="form-control"></textarea>
                                   </div>
                                   <div class="col-sm-12 col-md-12"><br/>
                                        <button id="submit_btn" class="btn btn-primary" type="submit" name=".btn-enviar">Enviar sua mensagem</button> <span id="notice" class="alert alert-warning alert-dismissable hidden" style="margin-left:20px;"></span> </div>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
    