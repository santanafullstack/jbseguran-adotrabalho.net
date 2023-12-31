import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PasswordAdminComponent } from "./modulo-1-admin/usuario-admin/password-admin/password-admin.component";
import { LoginAdminComponent } from "./modulo-1-admin/usuario-admin/login-admin/login-admin.component";
import { RegisterAdminComponent } from "./modulo-1-admin/usuario-admin/register-admin/register-admin.component";
import { DashboardComponent } from "./modulo-1-admin/dashboard/dashboard.component";
import { CadastrarEmpresaComponent } from "./modulo-1-admin/empresa/cadastrar-empresa/cadastrar-empresa.component";
import { CadastrarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";
import { CadastrarTurmasComponent } from "./modulo-1-admin/turmas/cadastrar-turmas/cadastrar-turmas.component";
import { CadastrarInstrutorComponent } from "./modulo-1-admin/instrutor/cadastrar-instrutor/cadastrar-instrutor.component";
import { CadastrarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/cadastrar-especializacao/cadastrar-especializacao.component";
import { CadastrarEnderecoComponent } from "./modulo-1-admin/endereco/cadastrar-endereco/cadastrar-endereco.component";
import { ConsultarEmpresaComponent } from "./modulo-1-admin/empresa/consultar-empresa/consultar-empresa.component";
import { ConsultarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/consultar-funcionario/consultar-funcionario.component";
import { ConsultarInstrutorComponent } from "./modulo-1-admin/instrutor/consultar-instrutor/consultar-instrutor.component";
import { ConsultarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/consultar-especializacao/consultar-especializacao.component";
import { ConsultarEnderecoComponent } from "./modulo-1-admin/endereco/consultar-endereco/consultar-endereco.component";
import { EditarEmpresaComponent } from "./modulo-1-admin/empresa/editar-empresa/editar-empresa.component";
import { EditarFuncionarioComponent } from "./modulo-1-admin/empresa/funcionario/editar-funcionario/editar-funcionario.component";
import { EditarTurmasComponent } from "./modulo-1-admin/turmas/editar-turmas/editar-turmas.component";
import { EditarInstrutorComponent } from "./modulo-1-admin/instrutor/editar-instrutor/editar-instrutor.component";
import { EditarEspecializacaoComponent } from "./modulo-1-admin/instrutor/especializacao/editar-especializacao/editar-especializacao.component";
import { EditarEnderecoComponent } from "./modulo-1-admin/endereco/editar-endereco/editar-endereco.component";
import { ListadepresencaComponent } from "./modulo-1-admin/turmas/listadepresenca/listadepresenca.component";
import { ConsultarCertificadoAlunosComponent } from "./modulo-1-admin/certificado/consultar-certificado-alunos/consultar-certificado-alunos.component";
import { CadastrarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/cadastrar-unidade/cadastrar-unidade.component";
import { ConsultarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/consultar-unidade/consultar-unidade.component";
import { CadastrarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/cadastrar-funcao/cadastrar-funcao.component";
import { ConsultarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/consultar-funcao/consultar-funcao.component";
import { CriarChamadoComponent } from "./modulo-1-admin/comercial/chamados/criar-chamado/criar-chamado.component";
import { EditarChamadoComponent } from "./modulo-1-admin/comercial/chamados/editar-chamado/editar-chamado.component";
import { ConsultarChamadoComponent } from "./modulo-1-admin/comercial/chamados/consultar-chamado/consultar-chamado.component";
import { ConsultarTurmasAdmComponent } from "./modulo-1-admin/turmas/adm/consultar-turmas-adm/consultar-turmas-adm.component";
import { CadastrarContratoComponent } from "./modulo-1-admin/empresa/contrato/cadastrar-contrato/cadastrar-contrato.component";
import { ConsultarContratoComponent } from "./modulo-1-admin/empresa/contrato/consultar-contrato/consultar-contrato.component";
import { CadastrarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/cadastrar-pedido-de-compras/cadastrar-pedido-de-compras.component";
import { EditarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/editar-pedido-de-compras/editar-pedido-de-compras.component";
import { ConsultarPedidoDeComprasComponent } from "./modulo-1-admin/empresa/contrato/pedido-de-compras/consultar-pedido-de-compras/consultar-pedido-de-compras.component";
import { EditarUnidadeComponent } from "./modulo-1-admin/turmas/unidade/editar-unidade/editar-unidade.component";
import { EditarFuncaoComponent } from "./modulo-1-admin/empresa/funcionario/funcao/editar-funcao/editar-funcao.component";
import { ConsultarContatosComponent } from "./modulo-1-admin/empresa/consultar-contatos/consultar-contatos.component";
import { ConsultarCursosComponent } from "./modulo-1-admin/turmas/cursos/consultar-cursos/consultar-cursos.component";
import { CadastrarCursoComponent } from "./modulo-1-admin/turmas/cursos/cadastrar-curso/cadastrar-curso.component";
import { EditarCursoComponent } from "./modulo-1-admin/turmas/cursos/editar-curso/editar-curso.component";
import { ConsultarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/consultar-proficiencia/consultar-proficiencia.component";
import { CriarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/criar-proficiencia/criar-proficiencia.component";
import { EditarProficienciaComponent } from "./modulo-1-admin/instrutor/proficiencia/editar-proficiencia/editar-proficiencia.component";
import { ConsultarTurmasComponent } from "./modulo-1-admin/turmas/consultar-turmas/consultar-turmas.component";
import { ConsultarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/consultar-pedidos-de-compras/consultar-pedidos-de-compras.component";
import { CadastrarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/cadastrar-pedidos-de-compras/cadastrar-pedidos-de-compras.component";
import { EditarPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/editar-pedidos-de-compras/editar-pedidos-de-compras.component";
import { CadastrarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/cadastrar-faturamento-pf/cadastrar-faturamento-pf.component";
import { EditarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/editar-faturamento-pf/editar-faturamento-pf.component";
import { ConsultarFaturamentoPfComponent } from "./modulo-1-admin/financeiro/faturamento-pf/consultar-faturamento-pf/consultar-faturamento-pf.component";
import { ConsultarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/consultar-faturamento-pj/consultar-faturamento-pj.component";
import { CadastrarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/cadastrar-faturamento-pj/cadastrar-faturamento-pj.component";
import { EditarFaturamentoPjComponent } from "./modulo-1-admin/financeiro/faturamento-pj/editar-faturamento-pj/editar-faturamento-pj.component";
import { CadastrarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component";
import { EditarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/editar-pessoa-fisica/editar-pessoa-fisica.component";
import { ConsultarPessoaFisicaComponent } from "./modulo-1-admin/pessoa-fisica/consultar-pessoa-fisica/consultar-pessoa-fisica.component";
import { CriarMatriculasFaturamentoPfComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pf/criar-matriculas-faturamento-pf/criar-matriculas-faturamento-pf.component";
import { ConsultarMatriculasFaturamentoPfComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pf/consultar-matriculas-faturamento-pf/consultar-matriculas-faturamento-pf.component";
import { ConsultarMatriculasFaturamentoPjComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pj/consultar-matriculas-faturamento-pj/consultar-matriculas-faturamento-pj.component";
import { CriarMatriculasPedidosComponent } from "./modulo-1-admin/turmas/matricula/pedidos/criar-matriculas-pedidos/criar-matriculas-pedidos.component";
import { ConsultarMatriculasPedidosComponent } from "./modulo-1-admin/turmas/matricula/pedidos/consultar-matriculas-pedidos/consultar-matriculas-pedidos.component";
import { CriarMatriculasFaturamentoPjComponent } from "./modulo-1-admin/turmas/matricula/faturamento-pj/criar-matriculas-faturamento-pj/criar-matriculas-faturamento-pj.component";
import { GerarAutorizacaoComponent } from "./modulo-1-admin/certificado/autorizacao/gerar-autorizacao/gerar-autorizacao.component";
import { ConsultaDeTurmasComponent } from "./modulo-1-admin/turmas/consulta-de-turmas/consulta-de-turmas.component";
import { MatriculasPessoaFisicaGerarDocumentosComponent } from "./modulo-1-admin/certificado/matriculas/matriculas-pessoa-fisica-gerar-documentos/matriculas-pessoa-fisica-gerar-documentos.component";
import { MatriculasPessoaJuridicaGerarDocumentosComponent } from "./modulo-1-admin/certificado/matriculas/matriculas-pessoa-juridica-gerar-documentos/matriculas-pessoa-juridica-gerar-documentos.component";
import { GerarCertificadoPessoafisicaComponent } from "./modulo-1-admin/certificado/pessoafisica/gerar-certificado-pessoafisica/gerar-certificado-pessoafisica.component";
import { GerarAutorizacaoPessoafisicaComponent } from "./modulo-1-admin/certificado/pessoafisica/gerar-autorizacao-pessoafisica/gerar-autorizacao-pessoafisica.component";
import { ListasPessoaFisicaPrimeiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-primeiro-dia/listas-pessoa-fisica-primeiro-dia.component";
import { ListasPessoaFisicaSegundoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-segundo-dia/listas-pessoa-fisica-segundo-dia.component";
import { ListasPessoaFisicaTerceiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-terceiro-dia/listas-pessoa-fisica-terceiro-dia.component";
import { ListasPessoaFisicaQuartoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quarto-dia/listas-pessoa-fisica-quarto-dia.component";
import { ListasPessoaFisicaQuintoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quinto-dia/listas-pessoa-fisica-quinto-dia.component";
import { ListasPessoaJuridicaPrimeiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-primeiro-dia/listas-pessoa-juridica-primeiro-dia.component";
import { ListasPessoaJuridicaSegundoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-segundo-dia/listas-pessoa-juridica-segundo-dia.component";
import { ListasPessoaJuridicaTerceiroDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-terceiro-dia/listas-pessoa-juridica-terceiro-dia.component";
import { ListasPessoaJuridicaQuartoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quarto-dia/listas-pessoa-juridica-quarto-dia.component";
import { ListasPessoaJuridicaQuintoDiaComponent } from "./modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quinto-dia/listas-pessoa-juridica-quinto-dia.component";
import { GerarRelatorioPessoaJuridicaComponent } from "./modulo-1-admin/financeiro/faturamento-pj/gerar-relatorio-pessoa-juridica/gerar-relatorio-pessoa-juridica.component";
import { GerarRelatorioPessoaFisicaComponent } from "./modulo-1-admin/financeiro/faturamento-pf/gerar-relatorio-pessoa-fisica/gerar-relatorio-pessoa-fisica.component";
import { GerarRelatorioPedidosDeComprasComponent } from "./modulo-1-admin/financeiro/pedidos-de-compras/gerar-relatorio-pedidos-de-compras/gerar-relatorio-pedidos-de-compras.component";
import { PerfilEmpresaComponent } from "./perfil/perfil-empresa/perfil-empresa.component";
import { PerfilAlunoComponent } from "./perfil/perfil-aluno/perfil-aluno.component";
import { PerfilMasterComponent } from "./perfil/perfil-master/perfil-master.component";
import { ConsultarMatriculasEmpresaComponent } from "./perfil/perfil-empresa/matriculas-empresa/consultar-matriculas-empresa/consultar-matriculas-empresa.component";
import { ConsultarMatriculasAlunoComponent } from "./perfil/perfil-aluno/matriculas-aluno/consultar-matriculas-aluno/consultar-matriculas-aluno.component";



const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' }, /* rota raiz */
    { path: 'recuperar-senha', component: PasswordAdminComponent },
    { path: 'acessar-conta', component: LoginAdminComponent },
    { path: 'registrar-conta', component: RegisterAdminComponent },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'cadastrar-empresa', component: CadastrarEmpresaComponent },
    { path: 'consultar-empresa', component: ConsultarEmpresaComponent },
    { path: 'consultar-contatos/:id', component: ConsultarContatosComponent },
    { path: 'editar-empresa/:id', component: EditarEmpresaComponent },


    { path: 'cadastrar-pessoa-fisica', component: CadastrarPessoaFisicaComponent },
    { path: 'editar-pessoa-fisica/:id', component: EditarPessoaFisicaComponent },
    { path: 'consultar-pessoa-fisica', component: ConsultarPessoaFisicaComponent },


    { path: 'cadastrar-faturamento-pf', component: CadastrarFaturamentoPfComponent},
    { path: 'editar-faturamento-pf/:id', component: EditarFaturamentoPfComponent },
    { path: 'consultar-faturamento-pf', component: ConsultarFaturamentoPfComponent },


    { path: 'gerar-certificado-pessoa-fisica', component: MatriculasPessoaFisicaGerarDocumentosComponent },
    { path: 'gerar-certificado-pessoa-juridica', component: MatriculasPessoaJuridicaGerarDocumentosComponent },




    { path: 'cadastrar-funcionario/:id', component: CadastrarFuncionarioComponent },
    { path: 'consultar-funcionario/:id', component: ConsultarFuncionarioComponent },
    { path: 'editar-funcionario/:id', component: EditarFuncionarioComponent },


    { path: 'cadastrar-turmas', component: CadastrarTurmasComponent },
    { path: 'editar-turmas/:id', component: EditarTurmasComponent },
    { path: 'consultar-turmas', component: ConsultarTurmasComponent},

    { path: 'consultar-cursos', component: ConsultarCursosComponent },
    { path: 'cadastrar-curso', component: CadastrarCursoComponent },
    { path: 'editar-curso/:id', component: EditarCursoComponent},


    { path: 'cadastrar-instrutor', component: CadastrarInstrutorComponent },
    { path: 'consultar-instrutores', component: ConsultarInstrutorComponent },
    { path: 'editar-instrutor/:id', component: EditarInstrutorComponent },

    {path: 'cadastrar-proficiencia', component: CriarProficienciaComponent},
    { path: 'consultar-proficiencia', component: ConsultarProficienciaComponent},
    { path: 'editar-proficiencia', component: EditarProficienciaComponent},


    { path: 'cadastro-de-especializacao', component: CadastrarEspecializacaoComponent },
    { path: 'consultar-especializacao', component: ConsultarEspecializacaoComponent },
    { path: 'editar-especializacao', component: EditarEspecializacaoComponent },



    { path: 'cadastrar-endereco', component: CadastrarEnderecoComponent },
    { path: 'consultar-endereco', component: ConsultarEnderecoComponent },
    { path: 'editar-endereco/:id', component: EditarEnderecoComponent},


    { path: 'cadastrar-pedidos-de-compras', component: CadastrarPedidoDeComprasComponent },
    { path: 'editar-pedidos-de-compras/:id', component: EditarPedidosDeComprasComponent },
    { path: 'consultar-pedidos-de-compras', component: ConsultarPedidosDeComprasComponent },


    { path: 'cadastrar-matriculas-faturamentopf/:id', component: CriarMatriculasFaturamentoPfComponent },
    { path: 'consultar-matriculas-faturamentopf', component: ConsultarMatriculasFaturamentoPfComponent },

    
    { path: 'cadastrar-matriculas-faturamentopj/:id', component: CriarMatriculasFaturamentoPjComponent},
    { path: 'consultar-todas-matriculas', component: ConsultarMatriculasFaturamentoPjComponent},

        
    { path: 'cadastrar-matriculas-pedidos/:id', component: CriarMatriculasPedidosComponent},
    { path: 'consultar-matriculas-pedidos', component: ConsultarMatriculasPedidosComponent},

    { path: 'cadastrar-faturamentopf', component:CadastrarFaturamentoPfComponent},
    { path: 'editar-faturamentopf/:id', component: EditarFaturamentoPfComponent},
    { path: 'consultar-faturamentopf', component: ConsultarFaturamentoPfComponent },

    { path: 'cadastrar-faturamentopj', component:CadastrarFaturamentoPjComponent},
    { path: 'consultar-faturamentopj', component:ConsultarFaturamentoPjComponent},
    { path: 'editar-faturamentopj/:id', component:EditarFaturamentoPjComponent},



    { path: 'editar-local-do-curso', component: EditarEnderecoComponent },
    { path: 'lista-de-presenca', component: ListadepresencaComponent },




    { path: 'gerar-certificado/:id', component: ConsultarCertificadoAlunosComponent },
    { path: 'gerar-lista-de-presenca/:id', component: ListadepresencaComponent },
    { path: 'gerar-autorizacao/:id', component: GerarAutorizacaoComponent },


    {path: 'cadastrar-unidade-de-treinamento', component: CadastrarUnidadeComponent},
    {path: 'consultar-unidade-de-treinamento', component: ConsultarUnidadeComponent},
    {path: 'editar-unidade-de-treinamento/:id', component: EditarUnidadeComponent},


    {path: 'cadastrar-funcao', component: CadastrarFuncaoComponent},
    {path: 'consultar-funcao', component: ConsultarFuncaoComponent},
    {path: 'editar-funcao/:id', component: EditarFuncaoComponent},
 
    {path: 'criar-chamado', component: CriarChamadoComponent},
    {path: 'editar-chamado/:id', component: EditarChamadoComponent},
    {path: 'consultar-chamado', component: ConsultarChamadoComponent},

    {path: 'consultar-turmas-adm', component: ConsultarTurmasAdmComponent},

    {path: 'cadastrar-contrato', component: CadastrarContratoComponent},
    {path: 'editar-contrato', component: EditarChamadoComponent},
    {path: 'consultar-contrato', component: ConsultarContratoComponent},


    {path: 'gerar-certificado-pessoa-fisica/:id', component: GerarCertificadoPessoafisicaComponent},
    {path: 'gerar-autorizacao-pessoa-fisica/:id', component: GerarAutorizacaoPessoafisicaComponent},



    {path: 'cadastrar-pedido-de-compras', component: CadastrarPedidosDeComprasComponent},
    {path: 'editar-pedido-de-compras', component: EditarPedidoDeComprasComponent},
    {path: 'consultar-pedido-de-compras', component: ConsultarPedidosDeComprasComponent},

    //listas de Presença Pessoa Fisica
    {path: 'lista-de-presenca-primeiro-dia-pessoa-fisica/:id', component: ListasPessoaFisicaPrimeiroDiaComponent},
    {path: 'lista-de-presenca-segundo-dia-pessoa-fisica/:id', component: ListasPessoaFisicaSegundoDiaComponent},
    {path: 'lista-de-presenca-terceiro-dia-pessoa-fisica/:id', component: ListasPessoaFisicaTerceiroDiaComponent},
    {path: 'lista-de-presenca-quarto-dia-pessoa-fisica/:id', component: ListasPessoaFisicaQuartoDiaComponent},
    {path: 'lista-de-presenca-quinto-dia-pessoa-fisica/:id', component: ListasPessoaFisicaQuintoDiaComponent},


    //listas de Presença Pessoa Juridica
{path: 'lista-de-presenca-primeiro-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaPrimeiroDiaComponent},
{path: 'lista-de-presenca-segundo-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaSegundoDiaComponent},
{path: 'lista-de-presenca-terceiro-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaTerceiroDiaComponent},
{path: 'lista-de-presenca-quarto-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaQuartoDiaComponent},
{path: 'lista-de-presenca-quinto-dia-pessoa-juridica/:id', component: ListasPessoaJuridicaQuintoDiaComponent},


{path: 'gerar-relatorio-pessoa-juridica/:id', component: GerarRelatorioPessoaJuridicaComponent},
{path: 'gerar-relatorio-pessoa-fisica/:id', component: GerarRelatorioPessoaFisicaComponent},
{path: 'gerar-relatorio-pedidos-de-compras/:id', component: GerarRelatorioPedidosDeComprasComponent},


{path: 'perfil-empresa', component: PerfilEmpresaComponent},
{path: 'consultar-matriculas-empresa', component: ConsultarMatriculasEmpresaComponent},


{path: 'perfil-aluno', component: PerfilAlunoComponent},
{path: 'consultar-matriculas-aluno', component: ConsultarMatriculasAlunoComponent},

{path: 'perfil-master', component: PerfilMasterComponent}



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }