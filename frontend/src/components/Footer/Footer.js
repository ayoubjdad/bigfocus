import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.mainFooter}>
        <div className={styles.footerTop}>
          <p>
            Fazemos parte da ABCD e atendemos às Orientações de Conduta em nosso
            Código de Ética e Autorregulação.
          </p>
          <div className={styles.socialMediaIcons}>
            <i class="fi fi-brands-facebook"></i>
            <i class="fi fi-brands-twitter"></i>
            <i class="fi fi-brands-instagram"></i>
            <i class="fi fi-brands-linkedin"></i>
          </div>
        </div>
        <div className={styles.footerBody}>
          <p>
            A Creditas é uma plataforma digital que atua como correspondente
            Bancário e Sociedade de Crédito Direto para facilitar o processo de
            contratação de empréstimos. Como Correspondente Bancário, seguimos
            as diretrizes da Resolução nº 3.954 e como Sociedade de Crédito
            Direto a resolução nº 4.656, ambas do Banco Central do Brasil. Somos
            correspondentes bancários das seguintes instituições: Companhia
            Hipotecária Piratini - CHP (CNPJ 18.282.093/0001-50), Sorocred
            Crédito Financiamento e Investimento S/A (CNPJ 04.814.563/0001-74),
            Creditas Sociedade de Crédito Direto S/A (CNPJ 32.997.490/0001-39) e
            Socinal S.A. – Crédito, financiamento e investimento (CNPJ
            03.881.423/0001-56) nos termos do artigo 2º, da Resolução CMN nº
            3.954, de 24 de fevereiro de 2011.
          </p>
          <p>
            Informações adicionais relativas ao Empréstimo com Garantia de
            Automóvel: mínimo 18 meses e máximo 60 meses - Empréstimo com
            Garantia de Imóvel: mínimo 60 meses e máximo 240 meses. Exemplo com
            Garantia de Imóvel - Empréstimo de R$ 100.000,00 para pagar em 20
            anos (240 meses) – Prestação inicial de R$ 1.274,72, com uma taxa de
            juros de 0,99% ao mês + IPCA, Sistema de Amortização Price. CET de
            12,55% ao ano - Empréstimo Consignado Privado: o prazo de pagamento
            mínimo é de 6 meses e máximo de 60 meses. Exemplo - Empréstimo de R$
            15.000,00 para pagamento em 48 meses – Total de 48 parcelas de R$
            469,57. Valor total a pagar igual a R$ 22.538,40 com uma taxa de
            juros de 1,65% ao mês (21,69% ao ano) e Custo Efetivo Total (CET) de
            23,88% ao ano
          </p>
          <p>
            Creditas Soluções Financeiras Ltda. - CNPJ 17.770.708/0001-24,
            localizada na Avenida das Nações Unidas, nº 12995 - Bloco I, térreo,
            Edifício Centenário Plaza, Brooklin Paulista, na Cidade de São
            Paulo, Estado de São Paulo, CEP 04578-911 | Creditas Sociedade de
            Crédito Direto S/A - CNPJ 32.997.490/0001-39, localizada na Avenida
            das Nações Unidas, nº 12995 - Bloco I, 1º andar, Edifício Centenário
            Plaza, Brooklin Paulista, na Cidade de São Paulo, Estado de São
            Paulo, CEP 04578-911.
          </p>
          <hr />
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.links}>
            <a href="#">Central da Transparência</a>
            <i class="fi fi-sr-bullet"></i>
            <a href="#">Política de privacidade</a>
            <i class="fi fi-sr-bullet"></i>
            <a href="#">Termos de uso</a>
            <i class="fi fi-sr-bullet"></i>
            <a href="#">Tabela de Tarifas</a>
          </div>
        </div>
      </div>
    </div>
  );
}
