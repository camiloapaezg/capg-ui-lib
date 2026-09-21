export class UserImageHelpers {
  static hashToRange(value: string, n: number): number {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("n must be a non-negative integer");
    }

    let hash = 0;
    for (let i = 0; i < value.length; i++) {
      hash = (hash * 31 + value.charCodeAt(i)) | 0;
    }

    return (hash >>> 0) % (n + 1);
  }

  static getInitials(name: string): string {
    if (!name || name.length === 0) {
      return "";
    }

    const words = name.toUpperCase().split(" ");
    if (words.length < 2) {
      return words[0].substring(0, 2);
    }

    return words[0][0] + words[1][0];
  }
}
