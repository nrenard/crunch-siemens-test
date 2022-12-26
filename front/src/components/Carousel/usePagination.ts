const range = (start: number, end: number): any => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface IPagination {
  total: number;
  page: number;
}

const LIMIT = 4;

const HALF_LIMIT = Math.round(LIMIT / 2);

export const usePagination = ({ total, page }: IPagination): number[] => {
  if (page <= 1) {
    return range(1, LIMIT);
  }

  if (page >= total) {
    return range(total - (LIMIT - 1), total);
  }

  if (page <= HALF_LIMIT) return range(page - 1, page + 2);

  return range(page - 2, page + 1);
};
