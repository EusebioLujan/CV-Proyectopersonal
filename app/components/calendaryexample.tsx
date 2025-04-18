"use client";

import { useState } from "react";
import Link from "next/link";

export function VintageCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setShowTimeSlots(true);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days = [];

    // Añadir días vacíos para alinear el primer día del mes
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Añadir los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === month &&
        new Date().getFullYear() === year;

      const isSelected = selectedDate === day;

      // Simular días disponibles (pares) y no disponibles (impares)
      const isAvailable = day % 2 === 0;

      days.push(
        <div
          key={day}
          onClick={() => isAvailable && handleDateClick(day)}
          className={`
            h-10 w-10 flex items-center justify-center 
            ${isAvailable ? "cursor-pointer" : "cursor-not-allowed opacity-30"}
            ${
              isToday
                ? "border-2 border-[#1a2639] font-bold"
                : "border border-gray-300"
            }
            ${isSelected ? "bg-[#1a2639] text-white" : ""}
            ${isAvailable && !isSelected ? "hover:bg-[#f0e6d2]" : ""}
            transition-colors relative
          `}
        >
          {day}
          {isAvailable && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
          )}
        </div>
      );
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    setSelectedDate(null);
    setShowTimeSlots(false);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
    setSelectedDate(null);
    setShowTimeSlots(false);
  };

  return (
    <div className="vintage-calendar border border-gray-300 p-6 bg-[#f8f5ee] relative overflow-hidden">
      {/* Marca de agua */}
      <div className="absolute -right-20 -bottom-20 opacity-5 transform rotate-12">
        <div className="text-[200px] font-bold">1925</div>
      </div>

      <div className="relative">
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-[#1a2639] px-4 py-1 font-bold text-[#1a2639] transform rotate-[-2deg] mb-2">
            CALENDARIO DE CITAS
          </div>
          <h2 className="text-xl font-bold">
            Seleccione una fecha y hora para nuestra reunión
          </h2>
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevMonth}
            className="border border-gray-300 px-3 py-1 hover:bg-[#1a2639] hover:text-white transition-colors flex items-center"
          >
            ← Anterior
          </button>

          <div className="text-xl font-bold text-center relative">
            <span className="relative z-10 px-4 py-1">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <div className="absolute inset-0 bg-[#f0e6d2] transform -rotate-1"></div>
          </div>

          <button
            onClick={nextMonth}
            className="border border-gray-300 px-3 py-1 hover:bg-[#1a2639] hover:text-white transition-colors flex items-center"
          >
            Siguiente →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center font-bold text-sm py-1 border-b border-gray-300"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {renderCalendarDays()}
        </div>

        {showTimeSlots && (
          <div className="mt-8 border-t border-gray-300 pt-4">
            <h3 className="text-center font-bold mb-4">
              Horarios Disponibles para el {selectedDate} de{" "}
              {monthNames[currentMonth.getMonth()]}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <div
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`
                    border border-gray-300 py-2 text-center cursor-pointer
                    ${
                      selectedTime === time
                        ? "bg-[#1a2639] text-white"
                        : "hover:bg-[#f0e6d2]"
                    }
                    transition-colors
                  `}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTime && (
          <div className="mt-8 text-center">
            <div className="mb-4 p-3 bg-[#f0e6d2] inline-block transform rotate-[-1deg]">
              <span className="font-bold">Cita seleccionada:</span>{" "}
              {selectedDate} de {monthNames[currentMonth.getMonth()]} a las{" "}
              {selectedTime}
            </div>
            <Link
              href="/reunion/confirmacion"
              className="block w-full bg-[#1a2639] text-white py-3 text-center hover:bg-[#2a3649] transition-colors border border-[#1a2639]"
            >
              Confirmar Reunión
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
