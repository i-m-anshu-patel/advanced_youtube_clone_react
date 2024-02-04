import React, { useEffect, useState } from 'react'

const useConvertDuration = (duration) => {
  const [datetime, setDateTime] = useState('');
  const convertDuration = (duration) => {
    if (duration.length === 0) {
      setDateTime("5:00")
    }
    const regex = /PT(\d+)M(\d+)S/;
    const match = duration.match(regex);
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      setDateTime(minutes + ":" + seconds);
    }
  }
  useEffect(() => {
    convertDuration(duration);
  }, [duration])

  return datetime;
}

export default useConvertDuration
