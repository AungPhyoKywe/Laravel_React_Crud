<?php

namespace App\Http\Controllers;

use App\Expense;
use Illuminate\Http\Request;
class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return IlluminateHttpResponse
     */
    public function all()
    {
        $expenses = Expense::all();
        return response()->json($expenses);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @return IlluminateHttpResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required' //optional if you want this to be required
        ]);
        $expense = Expense::create($request->all());
        return response()->json(['message'=> 'expense created',
        'expense' => $expense]);
    }

    /**
     * Display the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function show(Expense $expense)
    {
        return $expense;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);
        $expense= Expense::find($id);
        $expense->name = $request->name;
        $expense->description = $request->description;
        $expense->save();

        return response()->json([
            'message' => 'expense updated!',
            'expense' => $expense
        ]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destory($id)
    {
        $ex= Expense::find($id);
        $ex->delete();
        return response()->json([
            'message' => 'expense deleted',

        ]);
    }
}
