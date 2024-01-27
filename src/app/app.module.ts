import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarAdministracionComponent } from './componentes/agregar-administracion/agregar-administracion.component';
import { AgregarCartelComponent } from './componentes/agregar-cartel/agregar-cartel.component';
import { AgregarClienteComponent } from './componentes/agregar-cliente/agregar-cliente.component';
import { AgregarPropComponent } from './componentes/agregar-prop/agregar-prop.component';
import { AgregarSliderComponent } from './componentes/agregar-slider/agregar-slider.component';
import { AgregarUserComponent } from './componentes/agregar-user/agregar-user.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DetallepropComponent } from './componentes/detalleprop/detalleprop.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { FichasComponent } from './componentes/fichas/fichas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListarAdministracionComponent } from './componentes/listar-administracion/listar-administracion.component';
import { ListarCartelesComponent } from './componentes/listar-carteles/listar-carteles.component';
import { ListarClienteComponent } from './componentes/listar-cliente/listar-cliente.component';
import { ListarPropComponent } from './componentes/listar-prop/listar-prop.component';
import { ListarSliderComponent } from './componentes/listar-slider/listar-slider.component';
import { ListarUsersComponent } from './componentes/listar-users/listar-users.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModificarAdministracionComponent } from './componentes/modificar-administracion/modificar-administracion.component';
import { ModificarCartelComponent } from './componentes/modificar-cartel/modificar-cartel.component';
import { ModificarClienteComponent } from './componentes/modificar-cliente/modificar-cliente.component';
import { ModificarPropComponent } from './componentes/modificar-prop/modificar-prop.component';
import { ModificarSliderComponent } from './componentes/modificar-slider/modificar-slider.component';
import { ModificarUsersComponent } from './componentes/modificar-users/modificar-users.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { ServiciosempComponent } from './componentes/serviciosemp/serviciosemp.component';
import { VerMasClienteComponent } from './componentes/ver-mas-cliente/ver-mas-cliente.component';
import { SafePipe } from './pipes/safe.pipe';
import { authGuardGuard } from './guards/auth-guard.guard';
import { validarTokenGuard } from './guards/validar-token.guard';
import { rolesGuard } from './guards/roles.guard';
import { InmueblesService } from './servicios/inmuebles.service';
import { AdministracionService } from './servicios/administracion.service';
import { CartelesService } from './servicios/carteles.service';
import { ClientesService } from './servicios/clientes.service';
import { RolesService } from './servicios/roles.service';
import { SlidersService } from './servicios/sliders.service';
import { UsuariosService } from './servicios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    AgregarAdministracionComponent,
    AgregarCartelComponent,
    AgregarClienteComponent,
    AgregarPropComponent,
    AgregarSliderComponent,
    AgregarUserComponent,
    ContactoComponent,
    DashboardComponent,
    DetallepropComponent,
    EmpresaComponent,
    FichasComponent,
    FooterComponent,
    HeaderComponent,
    ListadoComponent,
    ListarAdministracionComponent,
    ListarCartelesComponent,
    ListarClienteComponent,
    ListarPropComponent,
    ListarSliderComponent,
    ListarUsersComponent,
    LoginComponent,
    ModificarAdministracionComponent,
    ModificarCartelComponent,
    ModificarClienteComponent,
    ModificarPropComponent,
    ModificarSliderComponent,
    ModificarUsersComponent,
    PrincipalComponent,
    PropiedadesComponent,
    ServiciosempComponent,
    VerMasClienteComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [authGuardGuard, validarTokenGuard, rolesGuard, InmueblesService, AdministracionService, CartelesService, ClientesService, SlidersService, UsuariosService, RolesService, {provide: String, useValue:""}],
  bootstrap: [AppComponent]
})
export class AppModule { }
