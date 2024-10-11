import React,{ useState } from "react";
import styled from "styled-components";
import edit from "../assets/Icons/edit.svg";
import AccountInitials from "../components/Initials";
import { FaXmark } from "react-icons/fa6";
import ModalNewPassword from "../components/ModalNewPassword";
import { BiSolidPencil } from "react-icons/bi";
import ModalUpdateName from "../components/ModalUpdateName";

const Headers = styled.div `
width: 100vw;
height: 10%;
background: linear-gradient(70deg, #23406D, #335FA6);
position: fixed;
top:0;

display: flex;
justify-content: flex-end;
align-items: center;
`
const IconX = styled(FaXmark)`
width: 4vh;
margin-right: 20px;
color: white;
height: 4vh;
`
const OtherContainer = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`
const MainContainer = styled.div `
display: flex;
align-items: end;
justify-content: center;
width: 84vw;
height: 67vh;
gap: 0.5%;
margin-top: 100px;
`
const Container = styled.div`
background: #D9D9D9;
border-radius: 10px;
height: 90%;
width: 95%;
`
const Column = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 95%;
height: 100%;
`
const Title = styled.h1`
font-family: "inter", sans-serif;
font-size: 43px;
align-self: flex-start;
padding-left: 20px;
color: #2C518D;
margin: 10px;

 @media (max-width: 1000px) {
    font-size: 35px;
  }
`
const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
`
const Profile = styled.div`
width: 45%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


 @media (max-width: 1300px) {
    width: 35%;
  }
`
const InformationGeneral = styled.div`
width: 55%;
display: flex;
justify-content: flex-start;
align-items: center;

 @media (max-width: 1300px) {
    width: 70%;
  }
`
const DivInfo = styled.div`
width: 76%;
height: 68%;
display: flex;
flex-direction: column;

 @media (max-width: 1300px) {
    width: 95%;
  }
   @media (max-width: 1000px) {
    width: 95%;
    font-size: 12px;
  }
`
const RowInfo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 100%;
`
const RowPassword = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 100%;
height: 100%;
`
const Box = styled.div`
background-color: #BABABA;
height: 80%;
width: 75%;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
`
const Edit = styled.input`
background-color: #BABABA;
height: 93%;
width: 100%;
border-radius: 15px;
border: none;
outline: none;
`
const TitleInfo = styled.h3`
font-size: 16px;
width: 20%;
margin: 0;
text-align: end;
font-family: "inter", sans-serif;
`
const TitlePassword = styled.h3`
font-size: 16px;
width: 50%;
margin: 0;
text-align: end;
padding-right: 10px;
font-family: "inter", sans-serif;
`
// Icono para editar texto
const ImagenEditSVG = styled.img`
width: 13px;
margin-right: 10px;
cursor: pointer;
`
const DivName = styled.div`
height: 20%;
width: 53%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
// nombre taller
const NameTaller = styled.h1`
color: #2C518D;
font-family: "inter", sans-serif;
font-size: 40px;
margin-right: 15px;
text-align: end;

 @media (max-width: 1000px) {
    font-size: 35px;
  }
`
const IconEditName = styled(BiSolidPencil)`
width: 21px;
color: #2c518d;
height: 21px;
cursor: pointer;
`
export default function Settings() {
  const username = 'emily sanchez';
  const [Editconfiguration, setEditconfiguration] = useState({
    email: 'emi@gmail.com',
    dueño: 'Emily',
    ciudad: 'Canelones',
    direccion: 'Las Piedras, julio sosa 555',
    celular: '095 555 555',
  });
  
  const [IsEdit, setIsEdit] = useState(null);

  // funcion para los cambios de la edicion
  const handleinput = (e, field) => {
    setEditconfiguration({ ...Editconfiguration, [field]: e.target.value });
  };
  // funcion para el click en el icono edit
  const handleEditClick = (field) => {
    setIsEdit(field);
  };
  // para guardar al precionar enter
  const SaveEnter = (e) => {
    if(e.key === 'Enter') {
      setIsEdit(false)
    }
  }
  // para guardar la nueva contraseña
  const [Password, setPassword] = useState('');
  // para guardar el nombre
  const [UpdateName, setUpdateName] = useState('nombre');
  // Estados separados para los modales
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);

  const openPasswordModal = () => setIsPasswordModalOpen(true);
  const closePasswordModal = () => setIsPasswordModalOpen(false);

  const openNameModal = () => setIsNameModalOpen(true);
  const closeNameModal = () => setIsNameModalOpen(false);

  const SavePassword = (newPassword) => {
    setPassword(newPassword); //Guarda la contraseña
  }
  const SaveName = (NewName) => {
    setUpdateName(NewName); // guarda el nombre
  }
return (
  <OtherContainer>
    <Headers>
      <IconX/>
    </Headers>
    <MainContainer>
      <Column>
        <Title>CONFIGURACION DEL TALLER</Title>
        <Container>
          <Row>
            <Profile>
              <AccountInitials name={username}/>
              <DivName>
                <NameTaller>{UpdateName}</NameTaller>
                <IconEditName onClick={openNameModal}/>
              </DivName>
              {isNameModalOpen && (
                <ModalUpdateName
                  isOpen={isNameModalOpen}
                  CurrentName={UpdateName} // Se pasa el nombre actual al modal
                  onSave={SaveName} // pasa la funcion que guarda al modal 
                  onClose={closeNameModal}/>
                )}
            </Profile>
            <InformationGeneral>
              <DivInfo>
                <RowInfo>
                <TitleInfo>Correo</TitleInfo>
                <Box>
                  {IsEdit === 'email' ? (
                    <Edit
                    type="email"
                    value={Editconfiguration.email}
                    onChange={(e) => handleinput(e, 'email')}
                    onKeyDown={SaveEnter}
                    />
                  ) : (
                    <>
                    {Editconfiguration.email}
                    <ImagenEditSVG
                      src={edit}
                      alt="edit"
                      role="button"
                      onClick={() => handleEditClick('email')}/>
                    </>
                  )}
                </Box>
                </RowInfo>
                <RowInfo>
                <TitleInfo>Dueño</TitleInfo>
                <Box>{IsEdit === 'dueño' ? (
                    <Edit type="text"
                      value={Editconfiguration.dueño}
                      onChange={(e) => handleinput(e, 'dueño')}
                      onKeyDown={SaveEnter}
                    />
                  ) : (
                    <>
                    {Editconfiguration.dueño}
                    <ImagenEditSVG
                      src={edit}
                      alt="edit"
                      role="button"
                      onClick={() => handleEditClick('dueño')}
                      autoFocus
                      />
                    </>
                  )}
                </Box>
                </RowInfo>
                <RowInfo>
                <TitleInfo>Ciudad</TitleInfo>
                <Box>
                {IsEdit === 'ciudad' ? (
                    <Edit type="text"
                      value={Editconfiguration.ciudad}
                      onChange={(e) => handleinput(e, 'ciudad')}

                      onKeyDown={SaveEnter}
                    />
                  ) : (
                    <>
                    {Editconfiguration.ciudad}
                    <ImagenEditSVG
                      src={edit}
                      alt="edit"
                      role="button"
                      onClick={() => handleEditClick('ciudad')}/>
                    </>
                  )}
                </Box>
                </RowInfo>
                <RowInfo>
                <TitleInfo>Dirección</TitleInfo>
                <Box>
                {IsEdit === 'direccion' ? (
                    <Edit type="text"
                    value={Editconfiguration.direccion}
                    onChange={(e) => handleinput(e, 'direccion')}
                    onKeyDown={SaveEnter}
                    />
                  ) : (
                    <>
                    {Editconfiguration.direccion}
                    <ImagenEditSVG
                      src={edit}
                      alt="edit"
                      role="button"
                      onClick={() => handleEditClick('direccion')}/>
                    </>
                  )}
                </Box>
                </RowInfo>
                <RowInfo>
                <TitleInfo>Celular</TitleInfo>
                <Box>
                {IsEdit === 'celular' ? (
                    <Edit type="text"
                    value={Editconfiguration.celular}
                    onChange={(e) => handleinput(e, 'celular')}
                    onKeyDown={SaveEnter}
                    />
                  ) : (
                    <>
                    {Editconfiguration.celular}
                    <ImagenEditSVG
                      src={edit}
                      alt="edit"
                      role="button"
                      onClick={() => handleEditClick('celular')}/>
                    </>
                  )}
                </Box>
                </RowInfo>
                <RowPassword>
                <TitlePassword>Cambiar contraseña</TitlePassword>
                  <ImagenEditSVG 
                    src={edit}
                    alt="edit"
                    role="button"
                    onClick={openPasswordModal}/>

                {isPasswordModalOpen && (
                  <ModalNewPassword 
                    onSave={SavePassword} // pasa la funcion al modal
                    isOpen={isPasswordModalOpen}
                    onClose={closePasswordModal} />
                  )}
                </RowPassword>
              </DivInfo>
            </InformationGeneral>
          </Row>
        </Container>
      </Column>
    </MainContainer>
  </OtherContainer>
  
)
}