declare module 'docs-test' {
  export function getMarkdownSlugs(): Promise<string[]>;
  export function getAbsolutePath(name: string): Promise<string>;
  export function getFiles(folder: string, depth: number): Promise<string[]>;
}
