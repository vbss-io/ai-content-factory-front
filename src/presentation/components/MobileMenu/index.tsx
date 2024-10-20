import { CassetteTape, Folders, Image, Video } from "@phosphor-icons/react";
import { Button } from "vbss-ui";

import { useAuth } from "@/presentation/hooks/use-auth";
import { useTab } from "@/presentation/hooks/use-tab";
import * as S from "./styles";

interface MobileMenuProps {
  setShowMenu: (value: boolean) => void;
}

export const MobileMenu = ({ setShowMenu }: MobileMenuProps) => {
  const { user } = useAuth();
  const { tab, setTab } = useTab();
  return (
    <S.Container>
      <S.Info>
        <S.Title>AI Content Factory</S.Title>
      </S.Info>
      <S.Divider />
      {user && (
        <Button
          variant={tab === "batches" ? "secondary" : "primary"}
          rounded="full"
          onClick={() => {
            setTab("batches");
            setShowMenu(false);
          }}
        >
          <Folders color="white" width="1.3rem" height="1.3rem" />
          Batches
        </Button>
      )}
      <Button
        variant={tab === "images" ? "secondary" : "primary"}
        rounded="full"
        onClick={() => {
          setTab("images");
          setShowMenu(false);
        }}
      >
        <Image color="white" width="1.3rem" height="1.3rem" />
        Imagens
      </Button>
      <Button
        variant={tab === "videos" ? "secondary" : "primary"}
        rounded="full"
        onClick={() => {
          setTab("videos");
          setShowMenu(false);
        }}
      >
        <Video color="white" width="1.3rem" height="1.3rem" />
        Vídeos
      </Button>
      <Button
        variant={tab === "audios" ? "secondary" : "primary"}
        rounded="full"
        onClick={() => {
          setTab("audios");
          setShowMenu(false);
        }}
      >
        <CassetteTape color="white" width="1.3rem" height="1.3rem" />
        Áudios
      </Button>
      <S.Divider />
      <S.CloseButton>
        <Button
          icon="x"
          size="icon-md"
          rounded="full"
          onClick={() => setShowMenu(false)}
        />
      </S.CloseButton>
    </S.Container>
  );
};
