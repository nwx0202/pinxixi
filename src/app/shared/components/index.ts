import { from } from 'rxjs';

/**
 * 使用index.ts的两个好处
 * 1. 缩短引用的路径
 * 2. 更好的封装，目录内部的结构的变化不会影响外部的引用
 */
export * from './scrollable-tab';
export * from './image-slider';
export * from './horizontal-grid';