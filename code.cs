using System;

class Program
{
    const int MAX = 100;
    const string EnterNumberOfElementsMessage = "Enter the number of elements (1-100): ";
    const string InvalidInputMessage = "Invalid input. Please provide a digit ranging from 1 to 100.";
    const string EnterIntegersMessage = "Enter {0} integers:";
    const string InvalidIntegerMessage = "Invalid input. Please enter valid integers.";
    const string SumMessage = "Sum of the numbers: ";

    static int Sum(int[] arr, int n)
    {
        int result = 0;
        for (int i = 0; i < n; i++)
        {
            result += arr[i];
        }
        return result;
    }

    static void Main()
    {
        int n = GetNumberOfElements();
        int[] arr = GetElements(n);
        int total = Sum(arr, n);
        Console.WriteLine(SumMessage + total);
    }

    static int GetNumberOfElements()
    {
        int n;
        Console.Write(EnterNumberOfElementsMessage);
        if (!int.TryParse(Console.ReadLine(), out n) || n < 1 || n > MAX)
        {
            Console.WriteLine(InvalidInputMessage);
            Environment.Exit(1);
        }
        return n;
    }

    static int[] GetElements(int n)
    {
        int[] arr = new int[n];
        Console.WriteLine(string.Format(EnterIntegersMessage, n));
        for (int i = 0; i < n; i++)
        {
            if (!int.TryParse(Console.ReadLine(), out arr[i]))
            {
                Console.WriteLine(InvalidIntegerMessage);
                Environment.Exit(1);
            }
        }
        return arr;
    }
}