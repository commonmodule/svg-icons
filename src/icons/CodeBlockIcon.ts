import { SvgIcon } from "@commonmodule/app-components";

export default class CodeBlockIcon extends SvgIcon {
  constructor() {
    super(
      ".code-block",
      "0 -960 960 960",
      '<path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>',
    );
  }
}
