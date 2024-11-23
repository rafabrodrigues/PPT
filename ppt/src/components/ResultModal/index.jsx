import { View, Text, Modal, Alert } from "react-native";
import React from "react";
import { Container, PlayerContainer, TextContainer } from "./styles";
import { AvatarPlayer } from "../AvatarPlayer";
import { Title } from "../Title";
import { TitleContainer } from "../../screens/Home/styles";
import { ImageOption } from "../ImageOption";

const ResultModal = ({
  modalVisible,
  setModalVisible,
  statusGame,
  optionPlayer1,
  optionPlayer2,
}) => {
  const optionUrl = [
    {
      id: 0,
      url: require("../../../assets/opcoes/pedra.png"),
    },
    {
      id: 1,
      url: require("../../../assets/opcoes/papel.png"),
    },
    {
      id: 2,
      url: require("../../../assets/opcoes/tesoura.png"),
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Container>
        <PlayerContainer>
          <AvatarPlayer
            source={require("../../../assets/players/player1.jpg")}
          />
          <TextContainer>
            <Title $color={"#fff "} $size="18px">
              {`Você escolheu`}
            </Title>
            {optionPlayer1 && optionUrl[optionPlayer1.id] ? (
              <ImageOption
                source={optionUrl[optionPlayer1.id].url}
                $size="48px"
              />
            ) : null}
          </TextContainer>
        </PlayerContainer>
        <PlayerContainer>
          <AvatarPlayer
            source={require("../../../assets/players/player2.jpg")}
          />
          <TextContainer>
            <Title $color={"#fff "} $size="18px">
              {`Jogador2 (Bot) escolheu`}
            </Title>
            {optionPlayer2 && optionUrl[optionPlayer2.id] ? (
              <ImageOption
                source={optionUrl[optionPlayer2.id].url}
                $size="48px"
              />
            ) : null}
          </TextContainer>
        </PlayerContainer>
        <TitleContainer>
          <Title
            $size="22px"
            $color={
              statusGame === "Empate"
                ? "#999"
                : statusGame === "Você perdeu!"
                ? "#ff0000"
                : statusGame === "Você ganhou!"
                ? "#22ff22"
                : "#000"
            }
          >
            {statusGame}
          </Title>
        </TitleContainer>
      </Container>
    </Modal>
  );
};

export default ResultModal;
