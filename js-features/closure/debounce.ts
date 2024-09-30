const fetchUrl = (url: string) => {
  console.log(`fetching ${url}`);
};

function debounce(
  callback: (...args) => void,
  timeout: number
): (...args) => void {
  let timer: NodeJS.Timeout | undefined = undefined;

  return (...args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}

export const fetching = debounce(fetchUrl, 500);
