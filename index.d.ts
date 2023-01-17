declare module 'meili-docs' {
  export function getMarkdownNames(): Promise<string[]>;
  export function getAbsolutePath(name: string): Promise<string>;
  export function getFiles(folder: string, depth: number): Promise<string[]>;
}
