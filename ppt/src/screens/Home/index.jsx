import React, { useState } from "react";
import {
  Container,
  OptionsContainer,
  PlayerContainer,
  TitleContainer,
} from "./styles";
import { opcoes } from "../../utils/opcoes";
import { ImageOption } from "../../components/ImageOption";
import { AvatarPlayer } from "../../components/AvatarPlayer";
import { Title } from "../../components/Title";
import { Modal, TouchableOpacity } from "react-native";
import { generateOption } from "../../utils/generateOption";
import ResultModal from "../../components/ResultModal";

export default function Home() {
  const [statusGame, setStatusGame] = useState();
  const [optionPlayer1, setOptionPlayer1] = useState(0);
  const [optionPlayer2, setOptionPlayer2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  const handleGame = (id) => {
    const player1Option = opcoes[id];
    const generatedOption = generateOption();
    const player2Option = opcoes[generatedOption];

    setOptionPlayer1(player1Option);
    setOptionPlayer2(player2Option);

    const key = `${player1Option.id}-${player2Option.id}`;
    console.log("o1", player1Option);
    console.log("o2", player2Option);
    console.log(key);

    switch (key) {
      case "0-0":
      case "1-1":
      case "2-2":
        setStatusGame("Empate");
        break;
      case "0-1":
      case "1-2":
      case "2-0":
        setStatusGame("Você perdeu!");
        setScorePlayer2(scorePlayer2 + 1);
        break;
      case "0-2":
      case "1-0":
      case "2-1":
        setStatusGame("Você ganhou!");
        setScorePlayer1(scorePlayer1 + 1);
        break;
      default:
        console.log("Opção inválida");
        break;
    }

    setModalVisible(true);
  };

  return (
    <Container>
      <PlayerContainer>
        <AvatarPlayer source={require("../../../assets/players/player1.jpg")} />
        <Title $color={"#fff "} $size="22px">
          Você
        </Title>
      </PlayerContainer>
      <TitleContainer>
        <Title $color={"#fff "} $size="22px">
          Pedra, Papel ou Tesoura?
        </Title>
      </TitleContainer>
      <OptionsContainer>
        <TouchableOpacity onPress={() => handleGame(0)}>
          <ImageOption source={require("../../../assets/opcoes/pedra.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGame(1)}>
          <ImageOption source={require("../../../assets/opcoes/papel.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGame(2)}>
          <ImageOption source={require("../../../assets/opcoes/tesoura.png")} />
        </TouchableOpacity>
      </OptionsContainer>
      <PlayerContainer>
        <AvatarPlayer source={require("../../../assets/players/player2.jpg")} />
        <Title $color={"#fff "} $size="22px">
          {`Jogador2 (Bot)`}
        </Title>

      </PlayerContainer>
      <ResultModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        statusGame={statusGame}
        optionPlayer1={optionPlayer1}
        optionPlayer2={optionPlayer2}
      />
      <Title $color={"#fff"} $size={'18px'}>Placar</Title>
      <Title $color={"#fff"} $size={'18px'}>Jogador 1: {scorePlayer1}</Title>
      <Title $color={"#fff"} $size={'18px'}>Jogador 2: {scorePlayer2}</Title>
    </Container >
  );
}
