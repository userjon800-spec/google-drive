import { ReactNode } from "react";

export interface ChildProps {
  children: ReactNode;
}
export interface DocIdProps {
  params: {
    documentId: string;
  };
}
