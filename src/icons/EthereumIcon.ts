import { SvgIcon } from "@commonmodule/app-components";

export default class EthereumIcon extends SvgIcon {
  constructor() {
    super(
      ".ethereum",
      "0 0 784.37 1277.4",
      `<g fill-rule="nonzero">
  <polygon points="392.07 0 383.5 29.11 383.5 873.74 392.07 882.29 784.13 650.54" fill="#343434"/>
  <polygon points="392.07 0 -0 650.54 392.07 882.29 392.07 472.33" fill="#8C8C8C"/>
  <polygon points="392.07 956.52 387.24 962.41 387.24 1263.3 392.07 1277.4 784.37 724.89" fill="#3C3C3B"/>
  <polygon points="392.07 1277.4 392.07 956.52 -0 724.89" fill="#8C8C8C"/>
  <polygon points="392.07 882.29 784.13 650.54 392.07 472.33" fill="#141414"/>
  <polygon points="0 650.54 392.07 882.29 392.07 472.33" fill="#393939"/>
</g>`,
    );
  }
}
