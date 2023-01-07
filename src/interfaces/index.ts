// interface 관리

export interface Iexample {
  name: string;
}

export interface Iarrow {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface Iprojects {
  title: string;
  desc: string;
  pid: number;
}
