import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import heroImage from "@/assets/hero.png";
import { CoffeeMenu } from "@/constants/menu";

import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeList } from "./components/CoffeeList";
import { HeroAttributes, HeroSection, HeroText } from "./styles";

export function Home() {
  return (
    <main>
      <HeroSection>
        <HeroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <HeroAttributes>
            <p>
              <span>
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span>
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </HeroAttributes>
        </HeroText>
        <img src={heroImage} alt="Copo térmico de café" />
      </HeroSection>
      <CoffeeList>
        {CoffeeMenu.map((coffee) => (
          <CoffeeItem key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </main>
  );
}
